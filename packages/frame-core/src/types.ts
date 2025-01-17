import type { Provider, RpcSchema } from "ox";

export type SetPrimaryButton = (options: {
  text: string;
  loading?: boolean;
  disabled?: boolean;
  hidden?: boolean;
}) => void;

export type EthProviderRequest = Provider.RequestFn<RpcSchema.Default>;

export type AccountLocation = {
  placeId: string;
  /**
   * Human-readable string describing the location
   */
  description: string;
};

export type FrameContext = {
  user: {
    fid: number;
    username?: string;
    displayName?: string;
    /**
     * Profile image URL
     */
    pfpUrl?: string;
  }
};

export type FrameHost = {
  context: FrameContext;
  close: () => void;
  ready: () => void;
  openUrl: (url: string) => void;
  setPrimaryButton: SetPrimaryButton;
  ethProviderRequest: EthProviderRequest;
};
