module.exports = {
  apps : [{
      name:'load_config',
      script:'./load_config.js',
       env: {
      NODE_ENV: 'development',
      DB_USER:'app',
      DB_HOST:'142.93.148.141',
      DB_PASS:'3b391ec5',
      DB_DATABASE:'development'
    }

  },{
    name: 'server',
    script: "npm",
    args : "start server.js",
    // script: './server.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    // args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      DB_USER:<db_username>,
      DB_HOST:<server_ip>,
      DB_PASS:<db_password>,
      DB_DATABASE:<db_name>,
      INVESTMENT_ACNT:<investment_acnt_username>,
      RAKE_ACNT:<rake_acnt_username>,
    },
    env_production: {
      NODE_ENV: 'production',
      DB_USER:<db_username>,
      DB_HOST:<server_ip>,
      DB_PASS:<db_password>,
      DB_DATABASE:<db_name>,
      INVESTMENT_ACNT:<investment_acnt_username>,
      RAKE_ACNT:<rake_acnt_username>,
    }
  }]
};