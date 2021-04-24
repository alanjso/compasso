module.exports = {
    apps: [
        {
            name: "Compasso UOL",
            script: "src/init.js",
            watch: true,
            env: {
                "NODE_ENV": "development"
            },
        }
    ]
}
