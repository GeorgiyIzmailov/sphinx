const inkeepDiv = document.createElement("div");
inkeepDiv.id = "inkeep";
inkeepDiv.style.position = "absolute";
document.body.appendChild(inkeepDiv);

const inkeepWidget = Inkeep().embed({
    componentType: "ChatButton",
    targetElement: document.getElementById("inkeep"),
    properties: {
      chatButtonType: "ICON_TEXT", // <-- the "Pill" variation
      baseSettings: {
        apiKey: "YOUR_API_KEY",
        integrationId: "YOUR_INTEGRATION_ID",
        organizationId: "YOUR_ORGANIZATION_ID",
        primaryBrandColor: "#0b507a",
        //... optional base settings
      },
      modalSettings: {
        // optional
      },
      searchSettings: {
        // optional
      },
      aiChatSettings: {
        chatSubjectName: "Sphinx", // <-- name of the subject of the chat
        botAvatarSrcUrl: "_static/sphinx-logo.svg",
        quickQuestions: [
          "Example question 1?",
          "Example question 2?",
          "Example question 3?",
        ],
        getHelpCallToActions: [
          {
            icon: { builtIn: 'FaSlack' },
            name: 'Slack',
            url: 'https://myorg.slack.com/C010101010',
          },
          {
            icon: { builtIn: 'FaDiscord' },
            name: 'Discord',
            url: 'https://discord.com/invite/invidecode123',
          },
          {
            icon: { builtIn: 'FaGithub' },
            name: 'GitHub',
            url: 'https://github.com/myorg/myrepo/discussions',
          },
        ],
      },
    },
});