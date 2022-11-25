import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1420px;
  height: 100%;
  padding: 0 20px;
  margin: 0 auto;
`;

export const FlexContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 1em;
`
