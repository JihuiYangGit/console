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

export default {
  Workspace: '组织空间',
  Workspaces: '组织空间',
  'Workspace Settings': '组织空间设置',
  'Workspace Members': '组织成员',
  'Workspace Roles': '组织角色',
  'Workspace Role': '组织角色',
  'Workspace Name': '组织空间名称',
  'Workspace Logo': '组织空间 Logo',
  'Workspace Manager': '组织空间管理员',
  'Workspaces Manager': '组织空间管理员',
  'Create Workspace': '创建组织空间',
  'Enter Workspace': '进入组织空间',

  'Projects Number': '项目数量',
  'DevOps Projects Number': 'DevOps 工程数量',
  'Edit Quota': '编辑配额',

  'View Workspace': '进入组织空间',
  'Delete Workspace': '删除组织空间',

  'Manage Organizations': '管理组织结构',

  'Involved Projects': '参与项目',
  'Created Projects': '创建的项目',
  'Workspace name exists': '组织空间名称已存在',
  'current name is not available': '当前名称不可用',

  WORKSPACE_OVERVIEW_DESC:
    '组织空间为 KubeSphere 提供了安全隔离的、具有访问权限控制的工作平台。这里您可以看到当前组织空间内资源运行的概况。',

  WORKSPACE_DESC:
    '组织空间是一个组织您的项目和 DevOps 工程、管理资源访问权限以及在团队内部共享资源等的逻辑单元，可以作为团队工作的独立工作空间。',

  WORKSPACE_SEARCH_PLACEHOLDER: '请输入组织空间名称进行查找',

  WORKSPACE_CREATE_DESC:
    '组织空间是一个组织您的项目和 DevOps 工程、管理资源访问权限以及在团队内部共享资源等的逻辑单元，可以作为团队工作的独立工作空间。',

  WORKSPACE_NAME_DESC:
    '请尽量保持名称简短，比如用组织名称的缩写或者大家经常的称呼，无需使用组织的完整名称或者营业执照上的注册名称。',

  WORKSPACE_ROLE_DESC: '组织角色定义了在当前组织空间下用户所拥有的权限。',
  WORKSPACE_LOGO_PLACEHOLDER:
    '组织标志尺寸必须小于 200px X 200px，支持 png，jpg 格式。建议从上传透明背景的 PNG 格式图片以达到最佳展示效果。',

  'Remove from Workspace': '从组织空间移除',
  'Please input workspace name': '请输入组织空间名称',

  NO_WORKSPACE_TIP:
    '您的账号目前不属于任何组织空间，请您创建一个组织空间或者联系管理员邀请您到其组织空间内进行工作',

  SEARCH_WORKSPACE_TIP: '请输入组织名称进行查找',

  'Invite members to the workspace': '邀请成员到该组织空间',
  WORKSPACE_MEMBER_DESC:
    '对组织空间内的成员进行管理及角色分配。项目可以邀请当前组织空间内的组织成员作为项目成员，协同工作。',
  INVITE_WORKSPACE_MEMBER_DESC: '您可以邀请新的成员来您的组织空间',
  INVITE_WORKSPACE_MEMBER_SEARCH_PLACEHODLER: '输入邮箱邀请组织空间成员',

  DELETE_WORKSPACE_TIP:
    '确定删除组织空间 <strong>{resource}</strong> ? 删除后将无法恢复, 组织空间下的资源也同时会被销毁。',
}
