import styled from 'styled-components';

import BookingDataBox from './BookingDataBox';
import Row from '../../ui/Row';
import Heading from '../../ui/Heading';
import Tag from '../../ui/Tag';
import ButtonGroup from '../../ui/ButtonGroup';
import Button from '../../ui/Button';
import ButtonText from '../../ui/ButtonText';

import { useMoveBack } from '../../hooks/useMoveBack';
import { useBooking } from './useBooking';
import Spinner from '../../ui/Spinner';
import { useNavigate } from 'react-router-dom';
import { HiArrowUpOnSquare } from 'react-icons/hi2';
import { useCheckout } from '../check-in-out/useCheckout';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Empty from '../../ui/Empty';
import { useDeleteBookings } from './useDeleteBookings';

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { booking, isLoading } = useBooking();
  const { deleteTheBooking, isDeleting } = useDeleteBookings();
  const { checkout, isCheckingout } = useCheckout();

  const moveBack = useMoveBack();
  const navigate = useNavigate();
  if (isLoading) return <Spinner />;
  if (!booking) return <Empty resource="booking" />;
  const statusToTagName = {
    unconfirmed: 'red',
    'checked-in': 'green',
    'checked-out': 'blue',
  };

  const { status, id: bookingId } = booking;
  return (
    <>
      <Row direction="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace('-', ' ')}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === 'unconfirmed' && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check In
          </Button>
        )}

        {status === 'checked-in' && (
          <Button
            icon={<HiArrowUpOnSquare />}
            disabled={isCheckingout}
            onClick={() => checkout(bookingId)}>
            Check Out
          </Button>
        )}

        <Modal>
          <Modal.Open opens="delete-booking">
            <Button variation="danger">Delete booking</Button>
          </Modal.Open>
          <Modal.Window name="delete-booking">
            <ConfirmDelete
              resourceName={'booking'}
              disabled={isDeleting}
              onConfirm={() =>
                deleteTheBooking(bookingId, {
                  onSuccess: () => {
                    navigate(-1);
                  },
                })
              }
            />
          </Modal.Window>
        </Modal>

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
