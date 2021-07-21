const { RESTDataSource } = require('apollo-datasource-rest');

class LaunchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.spacexdata.com/v3/';
  }

  getLaunchesByMissionName(missionName) {
    return this.get(`launches?mission_name=${missionName}`);
  }

  getLaunchesByRocketName(rocketName) {
    return this.get(`launches?rocket_name=${rocketName}`);
  }

  getLaunchesByLaunchYear(launchYear) {
    return this.get(`launches?launch_year=${launchYear}`);
  }
}

module.exports = LaunchAPI;