import development from '@config/development';
import production from '@config/production';

const nodeENV = process.env.NODE_ENV || 'development';

const env = { production, development }[nodeENV];

const config = {
  api: {
    host: env.API_HOST,
  },
  role: {
    employee: env.ROLE_EMPLOYEE,
    admin: env.ROLE_ADMIN,
  },
};

export default config;
