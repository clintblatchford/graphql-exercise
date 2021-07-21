const resolvers = {
  Query: {
    // returns an array of of Launches for entries that match missionName
    launchesByMissionName: (_, {missionName}, { dataSources }) => {
      return dataSources.launchAPI.getLaunchesByMissionName(missionName);
    },
    // returns an array of of Launches for entries that match rocketName
    launchesByRocketName: (_, {rocketName}, { dataSources }) => {
      return dataSources.launchAPI.getLaunchesByRocketName(rocketName);
    },
    // returns an array of of Launches for entries that match launchYear
    launchesByLaunchYear: (_, {launchYear}, { dataSources }) => {
      return dataSources.launchAPI.getLaunchesByLaunchYear(launchYear);
    }
  },
};

module.exports = resolvers;