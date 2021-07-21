import { useState } from 'react'
import styled from 'styled-components';
import '@fontsource/roboto';
import { Typography } from '@material-ui/core';
import SearchForm from './SearchForm'
import DataTable from './DataTable'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: #000000;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding: 10px;
  margin: 10px;
  border: 2px solid #000000;
  border-radius: 6px;
`;

function App() {
  const [radioSelection, setRadioSelection] = useState('mission');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useState({searchType: "", searchTerm: ""});


  const handleRadioGroup = (event) => {
    setRadioSelection(event.target.value);
  };

  const handleClick = (event) => {
    if(searchQuery.length < 1)
      alert("Please enter a search term");
    else
    {
      setSearchParams({searchType: radioSelection, searchTerm: searchQuery})
    }
  }

  const handleText = (event) => {
    setSearchQuery(event.target.value);
  }

  return (
    <PageWrapper>
      <Typography variant="h3">SpaceX Launch Search</Typography>
      <SearchWrapper>
        <SearchForm
          handleRadioGroup={handleRadioGroup}
          handleClick={handleClick}
          handleText={handleText}
          radioSelection={radioSelection}
          />
      </SearchWrapper>
      {searchParams.searchTerm.length > 0 && searchParams.searchType.length > 0 &&
        <>
          <Typography variant="h5">Results</Typography>
          <DataTable 
            searchParams={searchParams}
          />
        </>
      }
    </PageWrapper>
    );
}

export default App;
