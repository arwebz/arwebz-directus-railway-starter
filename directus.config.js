
module.exports = function (env) {
    return {
        // Railway inputs
        ADMIN_EMAIL: env.ADMIN_EMAIL,
        ADMIN_PASSWORD: env.ADMIN_PASSWORD,
        KEY: env.KEY,
        SECRET: env.SECRET,

        // Reference: https://docs.railway.app/deploy/exposing-your-app
        PORT: env.PORT,

        // Reference: https://docs.railway.app/develop/variables#railway-provided-variables
        PUBLIC_URL: `http://0.0.0.0:${env.PORT}`,

        // Database variables from Railway PostgreSQL Plugin
        // Reference: https://docs.railway.app/plugins/postgresql
        DB_CLIENT: 'mysql',
        DB_HOST: env.MYSQLHOST,
        DB_PORT: env.MYSQLPORT,
        DB_DATABASE: env.MYSQLDATABASE,
        DB_USER: env.MYSQLUSER,
        DB_PASSWORD: env.MYSQLPASSWORD,
    };
};
