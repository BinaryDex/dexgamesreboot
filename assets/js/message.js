function sendMessage() {
  console.log("attempting to send discord message")
  var request = new XMLHttpRequest();
  request.open("POST", "https://discord.com/api/webhooks/1081386649155551285/yQjse_CIykCSSsuSEfuWk8KgIz73HbPWfUvVHeJixcabb4nOKMPMvzoTW5nhG3-wdxsw");
  // again, replace the url in the open method with yours
  request.setRequestHeader('Content-type', 'application/json');

  var myEmbed = {
    field: {
        name: "test",
        value: "message"
    },
    title: "Webhook",
    description: "This is a cool-looking Discord embed, sent directly from JavaScript!",
    color: hexToDecimal("#ff0000")
  }

  var params = {
    username: "test",
    embeds: [ myEmbed ]
  }

  request.send(JSON.stringify(params));

  // function that converts a color HEX to a valid Discord color
  function hexToDecimal(hex) {
    return parseInt(hex.replace("#",""), 16)
  }
}
