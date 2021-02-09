'use strict';
const v3 = require('node-hue-api').v3;

const model = v3.model;

// Replace this with your Bridge User name
const USERNAME = 'po8cCSHyxja0eQYgD3fWz86fbZ5Wu2wWzvBDGt68'


v3.discovery.nupnpSearch()
  .then(searchResults => {
    const host = searchResults[0].ipaddress;
    return v3.api.createLocal(host).connect(USERNAME);
  })
  .then(api => {
    const newGroup = model.createLightGroup();
    // The name of the new group to create
    newGroup.name = 'Goldish';
    // The array of light ids that will be in the group
    newGroup.lights = [8,9,10,11,12,13,14,15,16,17,18,19,20,21];

    return api.groups.createGroup(newGroup)
      .then(group => {
        console.log(group.toStringDetailed());

        // Delete the new Group
        return api.groups.deleteGroup(group);
      });
  })
  .catch(err => {
    console.error(err);
  })
;