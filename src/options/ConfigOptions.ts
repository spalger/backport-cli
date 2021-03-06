import { Logger } from '../services/logger';

export interface BranchChoice {
  name: string;
  checked?: boolean;
}
export type BranchChoiceRaw = string | BranchChoice;

type AutoFixConflictsHandler = ({
  files,
  directory,
  logger,
}: {
  files: string[];
  directory: string;
  logger: Logger;
}) => boolean | Promise<boolean>;

export interface ConfigOptions {
  accessToken?: string;
  all?: boolean;
  assignees?: string[];
  author?: string;
  autoAssign?: boolean;
  autoFixConflicts?: AutoFixConflictsHandler;
  branchLabelMapping?: Record<string, string>;
  editor?: string;
  fork?: boolean;
  gitHostname?: string;
  githubApiBaseUrlV3?: string;
  githubApiBaseUrlV4?: string;
  maxNumber?: number;
  multiple?: boolean;
  multipleBranches?: boolean;
  multipleCommits?: boolean;
  noVerify?: boolean;
  path?: string;
  prDescription?: string;
  prFilter?: string;
  prTitle?: string;
  pullNumber?: number;
  sourceBranch?: string;
  sourcePRLabels?: string[];
  targetBranchChoices?: BranchChoiceRaw[];
  targetBranches?: string[];
  targetPRLabels?: string[];
  upstream?: string;
  username?: string;

  // deprecated: renamed to `targetBranchChoices`
  branches?: BranchChoiceRaw[];

  // deprecated: renamed to `targetPRLabels`
  labels?: string[];
}
