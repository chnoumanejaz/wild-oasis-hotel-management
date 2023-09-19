import Button from '../../ui/Button';
import { useCheckout } from '../check-in-out/useCheckout';
import SpinnerMini from '../../ui/SpinnerMini';

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingout } = useCheckout();

  return (
    <Button
      size="small"
      onClick={() => checkout(bookingId)}
      disabled={isCheckingout}>
      {isCheckingout ? <SpinnerMini /> : 'Check out'}
    </Button>
  );
}

export default CheckoutButton;
