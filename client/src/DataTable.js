import { useQuery, gql } from '@apollo/client';
import {
  Table, 
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';

export const LAUNCHES_MISSION_NAME = gql`
  query getLaunchesByMissionName($searchTerm: String!) {
    launchesByMissionName(missionName: $searchTerm) {
      mission_name
      rocket {
        rocket_name
      }
      launch_date_utc
      links {
        video_link
      }
    }
  }
`;

export const LAUNCHES_ROCKET_NAME = gql`
  query getLaunchesByRocketName($searchTerm: String!) {
    launchesByRocketName(rocketName: $searchTerm) {
      mission_name
      rocket {
        rocket_name
      }
      launch_date_utc
      links {
        video_link
      }
    }
  }
`;

export const LAUNCHES_LAUNCH_YEAR = gql`
  query getLaunchesByLaunchYear($searchTerm: String!) {
    launchesByLaunchYear(launchYear: $searchTerm) {
      mission_name
      rocket {
        rocket_name
      }
      launch_date_utc
      links {
        video_link
      }
    }
  }
`;

/* 
  Queries with search term and type provided via props
  and renders results into a table
*/
const DataTable = ({searchParams}) => {

  const searchType = searchParams.searchType;
  const searchTerm = searchParams.searchTerm;
  let query = null;
  
  switch(searchType) {
    case "mission":
      query = LAUNCHES_MISSION_NAME;
      break;
    case "rocket":
      query = LAUNCHES_ROCKET_NAME;
      break;
    case "year":
      query = LAUNCHES_LAUNCH_YEAR;
      break;
    default:
      query = LAUNCHES_MISSION_NAME;
      break;
  }

  const { loading, error, data } = useQuery(query, {
      variables: {searchTerm}
  });

  if (loading) return (
    <p>Loading ...</p>
  );

  if(error) return (    
    <p>Error: {JSON.stringify(error)}</p>
  );

  // assign all results to result.launches for rendering
  let result = {}
  if(data && data.launchesByMissionName) {
    result['launches'] = data['launchesByMissionName'];
  }
  if(data && data.launchesByRocketName) {
    result['launches'] = data['launchesByRocketName'];
  }
  if(data && data.launchesByLaunchYear) {
    result['launches'] = data['launchesByLaunchYear'];
  }

  return (
    <TableContainer component={Paper} style={{width: "80%"}}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Mission Name</TableCell>
            <TableCell align="left">Rocket Name</TableCell>
            <TableCell align="left">Launch Date</TableCell>
            <TableCell align="left">Video Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {result.launches.length > 0 && result.launches.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell align="left">{row.mission_name}</TableCell>
              <TableCell align="left">{row.rocket.rocket_name}</TableCell>
              <TableCell align="left">{row.launch_date_utc}</TableCell>
              <TableCell align="left"><a href={row.links.video_link} target="_blank" rel="noreferrer">Video</a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;