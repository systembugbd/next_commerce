import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  naveBar: {
    backgroundColor: '#0076ce',
    '& a': {
      color: '#fff',
      marginLeft: '10px',
    },
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    textAlign: 'center',
  },
});

export default useStyles;
