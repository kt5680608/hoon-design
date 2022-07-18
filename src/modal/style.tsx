import styled from 'styled-components';
import { motion } from 'framer-motion';
export const ModalBody = styled.div`
  width: 100vw;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  overflow: scroll;
  display: flex;
  align-items: center;
  z-index: 995;
`;

export const ModalContent = styled(motion.div)<{
  size: 'sm' | 'lg';
}>`
  body.active-modal {
    overflow-y: hidden;
  }
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #f1f1f1;
  padding: 14px 28px;
  width: ${(props) => (props.size === 'sm' ? '36vw ' : '80vw')};
  min-width: 320px;
  border-radius: ${(props) => (props.size === 'sm' ? '16px' : '0px')};
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 100vh;
  max-width: 80vw;
  z-index: 999;
  word-break: break-all;
  text-align: start;

  @media (max-width: 426px) {
    padding: 14px 12px;
    width: 92vw;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Overlay = styled(ModalBody)`
  background: rgba(49, 49, 49, 0.8);
`;

export const ModalTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
`;
export const ModalFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
  margin-bottom: 12px;
`;
