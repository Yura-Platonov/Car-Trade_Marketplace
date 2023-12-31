import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsOpen, setIsOpen } from 'redux/modal/modalSlice';
import { Container, Overlay } from './modalWraper.styled';


export const ModalWraper = ({ children }) => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector(selectIsOpen);

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      dispatch(setIsOpen(false));
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        dispatch(setIsOpen(false));
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch, modalIsOpen]);

  return (
    <>
      <Overlay onClick={handleOverlayClick}>
        <Container>{children}</Container>
      </Overlay>
    </>
  );
};

export default ModalWraper;
