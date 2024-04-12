import {InputBase, Paper, Divider, IconButton} from '@mui/material';
import {Check} from '@mui/icons-material';

const SelectedMoviesForm = () => (
  <Paper
    component="form"
    sx={{p: '2px 4px', display: 'flex', alignItems: 'center'}}
  >
    <InputBase
      sx={{ml: 1, flex: 1}}
      placeholder="Put the list name"
      inputProps={{'aria-label': 'put list name'}}
    />
    <Divider sx={{height: 28, m: 0.5}} orientation="vertical" />
    <IconButton
      color="primary"
      sx={{p: '10px'}}
      aria-label="directions"
    >
      <Check />
    </IconButton>
  </Paper>
)

export default SelectedMoviesForm;
