import styled from 'styled-components'

import {ReactComponent as SearchIcon} from '../icons/search.svg'

const Form = styled.form`
  margin-bottom: 2rem;
  padding: 0 1.6rem;
  position: relative;
`

const Input = styled.input`
  background-color: var(--grey);
  border: none;
  border-radius: 4px;
  font-family: inherit;
  height: 4rem;
  padding-left: 1.6rem;
  width: 100%;
`

const StyledSearchIcon = styled(SearchIcon)`
  position: absolute;
  right: 2.9rem;
  top: 50%;
  transform: translateY(-50%);
`

const SearchForm = () => {
  return (
    <Form>
      <Input type='search' placeholder='Search merchbuy' />
      <StyledSearchIcon/>
    </Form>
  )
}

export default SearchForm
