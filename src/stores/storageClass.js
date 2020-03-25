/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

import { get, set, isString, isEmpty, isArray } from 'lodash'
import { action, observable } from 'mobx'
import ObjectMapper from 'utils/object.mapper'
import Base from './base'

export default class StorageClassStore extends Base {
  @observable
  resources = {
    data: [],
    isLoading: true,
  }

  @observable
  metrics = {
    data: [],
    isLoading: true,
  }

  constructor() {
    super()
    this.module = 'storageclasses'
  }

  get apiVersion() {
    return 'apis/storage.k8s.io/v1'
  }

  getListUrl = () => `${this.apiVersion}/storageclasses`

  getResourceUrl = () => `kapis/resources.kubesphere.io/v1alpha2/${this.module}`

  @action
  create(data) {
    if (data.provisioner === 'custom') {
      data.provisioner = data.parameters.provisioner
      delete data.parameters.provisioner
    }

    if (isString(data.allowVolumeExpansion)) {
      data.allowVolumeExpansion = data.allowVolumeExpansion === 'true'
    }

    const supportedAccessModes = get(
      data,
      'metadata.annotations["storageclass.kubesphere.io/supported_access_modes"]'
    )

    if (!isEmpty(supportedAccessModes) && isArray(supportedAccessModes)) {
      set(
        data,
        'metadata.annotations["storageclass.kubesphere.io/supported_access_modes"]',
        JSON.stringify(supportedAccessModes)
      )
    }

    return this.submitting(request.post(this.getListUrl(), data))
  }

  @action
  async fetchResources({ name, ...rest }) {
    this.resources.isLoading = true

    const params = {
      ...rest,
    }

    if (name) {
      params.conditions = `storageClassName=${name}`
    }

    const result = await request.get(
      `kapis/resources.kubesphere.io/v1alpha2/persistentvolumeclaims`,
      params
    )

    this.resources = {
      data: result.items ? result.items.map(ObjectMapper.volumes) : [],
      isLoading: false,
    }
  }

  getStorageSizeConfig() {
    const DEFAULT_MAX_SIZE = 2048
    const DEFAULT_STEP = 1
    const DEFAULT_MIN_SIZE = 0

    const detail = this.detail || {}
    const min = Number(get(detail, 'parameters.minSize')) || DEFAULT_MIN_SIZE
    const max = Number(get(detail, 'parameters.maxSize')) || DEFAULT_MAX_SIZE
    const step = Number(get(detail, 'parameters.stepSize')) || DEFAULT_STEP

    return {
      min,
      max,
      step,
    }
  }
}
