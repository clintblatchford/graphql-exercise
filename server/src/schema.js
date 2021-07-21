const {gql} = require('apollo-server');

const typeDefs = gql`
  type Query {
    "Query to get launches by mission name"
    launchesByMissionName(missionName: String!): [Launch]
    "Query to get launches by rocket name"
    launchesByRocketName(rocketName: String!): [Launch]
    "Query to get launches by launch year"
    launchesByLaunchYear(launchYear: String!): [Launch]
  }

  "A Launch contains information about a particular Space X launch"
  type Launch {
    "The name of the mission"
    mission_name: String
    "The rocket information for this mission"
    rocket: Rocket!
    "The date of the mission"
    launch_date_utc: String!
    "The link information for this mission"
    links: Link
  }

  type Rocket {
    rocket_name: String!
  }

  type Link {
    video_link: String
  }
`;

module.exports = typeDefs;