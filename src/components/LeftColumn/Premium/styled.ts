import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px;
`;
export const Text = styled.h3`
  color: rgba(0, 0, 0, 0.9);
  font-size: 12px;
  line-height: 1.33333;
  font-weight: 600;
`;

export const Circle = styled.div`
  width: 5px;
  height: 5px;
  /* border-radius: 25%; */

  &.gold {
    background: #b29a53;
  }
`;
