import {FormattedMessage} from "react-intl";
import {Field} from 'react-final-form'
import {TextField} from '@mui/material';

export const YearField = () => {
  return (
    <Field
      name="year"
      render={({input}) => (
        <TextField
          id="outlined-basic"
          label={<FormattedMessage id="filters.year"></FormattedMessage>}
          variant="outlined"
          type="number"
          minvalue={1800}
          maxvalue={2030}
          {...input}
        />
      )}
    />
  )
}
