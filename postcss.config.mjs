import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import postcssTailwind from '@tailwindcss/postcss';

export default {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    postcssTailwind(),
  ],
};
