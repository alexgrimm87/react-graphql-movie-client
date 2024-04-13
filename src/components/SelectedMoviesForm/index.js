import {Form, Field} from 'react-final-form'
import {InputBase, Paper, Divider, IconButton} from '@mui/material';
import {Check} from '@mui/icons-material';

const SelectedMoviesForm = ({onSubmit}) => (
  <Form
    onSubmit={onSubmit}
    validate={values => {
      const errors = {}

      if (!values.listName) {
        errors.listName = 'Required'
      }

      return errors
    }}
    render={({handleSubmit}) => (
      <form onSubmit={handleSubmit}>
        <Paper sx={{p: '2px 4px', display: 'flex', alignItems: 'center'}}>
          <Field
            name="listName"
            render={({input, meta}) => (
              <>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Put the list name"
                  inputProps={{'aria-label': 'put list name'}}
                  {...input}
                />
              </>
            )}
          />
          <Divider sx={{height: 28, m: 0.5}} orientation="vertical"/>
          <IconButton
            type="submit"
            color="primary"
            sx={{p: '10px'}}
            aria-label="directions"
          >
            <Check/>
          </IconButton>
        </Paper>
      </form>
    )}
  />
)

export default SelectedMoviesForm;
