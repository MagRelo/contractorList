# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  tabs: [
    {
      title: "Welcome"
      id: "welcome"
      location: "welcome#index"
    }
    {
      title: "Map"
      id: "geolocation"
      location: "geolocation#index"
    }
    {
      title: "Contractors"
      id: "list"
      location: "contractor#index"
    }
    {
      title: "Camera"
      id: "camera"
      location: "camera#index"
    }
  ]

#  rootView:
#     location: "contractor#index"

  preloads: [
    {
      id: "learn-more"
      location: "example#learn-more"
    }
    {
      id: "using-the-scanner"
      location: "example#using-the-scanner"
    }
  ]
#
#  drawers:
#     left:
#       id: "leftDrawer"
#       location: "welcome#index"
#       showOnAppLoad: false
#     options:
#       animation: "swingingDoor"
  #
  # initialView:
  #   id: "initialView"
  #   location: "example#initial-view"
