import SearchIcon from '@material-ui/icons/Search';
import { 
  Button, 
  TextField, 
  FormControl, 
  RadioGroup, 
  FormControlLabel, 
  Radio,
  FormLabel
} from '@material-ui/core';

/*
  Textfield: user supplied input string
  Radio: user selection for search type: mission name, rocket name or launch year
  Button: submission of search string and type to DataTable
*/
const SearchForm = ({
  handleRadioGroup,
  handleClick,
  handleText,
  radioSelection
}) => {

  return (
    <>
      <TextField 
        style={{width: "500px"}} 
        id="mission" 
        label="Search Launches" 
        variant="outlined"
        type="search"
        onChange={handleText}/>
      <FormControl component="fieldset" style={{marginTop: "20px"}}>
        <FormLabel component="legend">Search by</FormLabel>
        <RadioGroup aria-label="gender" name="searchType" value={radioSelection} onChange={handleRadioGroup}>
          <FormControlLabel value="mission" control={<Radio />} label="Mission name" />
          <FormControlLabel value="rocket" control={<Radio />} label="Rocket name" />
          <FormControlLabel value="year" control={<Radio />} label="Launch year" />
        </RadioGroup>
      </FormControl>
      <Button 
        style={{width: "200px", marginBottom: "40px"}} 
        variant="contained" 
        color="secondary"
        onClick={handleClick}
        startIcon={<SearchIcon/>}
        size="large">
        Search
      </Button>
    </>
  );
}

export default SearchForm;