import styled from "styled-components";


export const Alert = styled.div`
  font-size: 16px;

  background: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  max-width: 100%;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  animation: alert-appear 2s 1s ease forwards;

  @keyframes alert-appear {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }


  @keyframes appear {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
