module.exports = {
    ci: {
      collect: {
        staticDistDir: './build', // Set the path to your built static assets
      },
      assert: {
        assertions: {
          'categories:performance': ['error', { minScore: 0.9 }], // Set the minimum performance score you want to enforce
          'categories:accessibility': ['warn', { minScore: 0.8 }], // Set the minimum accessibility score you want to enforce
        },
      },
      upload: {
        target: 'temporary-public-storage', // Use temporary public storage for the reports
        // if you have an lhci server - you can use the below configuration. 
        // Specify the target for uploading the Lighthouse CI reports
       // target: 'lhci', 
       // Set the base URL of your Lighthouse CI server (if applicable)
       // serverBaseUrl: 'https://your-lhci-server.com',
       // Set the token for authenticating with the Lighthouse CI server (if applicable)
       // token: 'your-lhci-token', 
      },
    },
  };
  