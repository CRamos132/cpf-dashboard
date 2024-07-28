import { HiRefresh } from "react-icons/hi";
import { GrayOverlay } from "../../atoms/GrayOverlay";
import { LoadingIconWrapper } from "./style";

export default function LoadingSpinner() {
  return (
    <GrayOverlay data-testid='loadingSpinner'>
      <LoadingIconWrapper>
        <HiRefresh size='32px' />
      </LoadingIconWrapper>
    </GrayOverlay>
  )
}