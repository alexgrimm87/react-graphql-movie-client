import {FormattedMessage} from "react-intl";
import {Field} from 'react-final-form'
import {Checkbox, FormControlLabel} from '@mui/material';

export const AdultField = () => (
  <Field
    name="includeAdult"
    type="checkbox"
    render={({input}) => (
      <FormControlLabel
        control={<Checkbox {...input} />}
        label={<FormattedMessage id="filters.include_adult" />}
      />
    )}
  />
)
