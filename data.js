var APP_DATA = {
  "scenes": [
    {
      "id": "0-ulaz-u-kuhinju",
      "name": "Ulaz u kuhinju",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.1342679455350897,
        "pitch": 0.03504243150656805,
        "fov": 1.513008513283841
      },
      "linkHotspots": [
        {
          "yaw": -0.19285022199319002,
          "pitch": 0.037103737399103665,
          "rotation": 0,
          "target": "1-kuhinja"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.3025973948735405,
          "pitch": -0.05186224526627292,
          "title": "Kuhinja Njemačka",
          "image: "pics/10.jpg""
        }
      ]
    },
    {
      "id": "1-kuhinja",
      "name": "Kuhinja",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 2.0439376323672693,
        "pitch": 0.16950661914224874,
        "fov": 1.513008513283841
      },
      "linkHotspots": [
        {
          "yaw": 2.718380158628925,
          "pitch": 0.1273767341174512,
          "rotation": 3.9269908169872414,
          "target": "0-ulaz-u-kuhinju"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
