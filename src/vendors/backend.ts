import { getMonitorAPIs } from 'vendors/monitor'
import { getOasisscanV2APIs } from 'vendors/oasisscan-v2'
import { getNexusAPIs } from 'vendors/nexus'
import { BackendAPIs } from 'config'

const backendNameToApi = {
  [BackendAPIs.OasisMonitor]: getMonitorAPIs,
  [BackendAPIs.OasisScanV2]: getOasisscanV2APIs,
  [BackendAPIs.Nexus]: getNexusAPIs,
}

export const backend = () =>
  (process.env.REACT_APP_E2E_TEST && window.REACT_APP_BACKEND) ||
  process.env.REACT_APP_BACKEND ||
  BackendAPIs.OasisMonitor
export const backendApi = backendNameToApi[backend()]
