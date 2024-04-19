import {Field} from 'react-final-form'
import {Radio, RadioGroup, FormControlLabel, FormControl, FormLabel} from '@mui/material';
import {FormattedMessage} from "react-intl";
import {SORT_DIRECTION} from '../../../../const';

export const SortDirectionField = () => {
  return (
    <Field
      name="sortDirection"
      render={({input}) => (
        <FormattedMessage id="filters.sort_direction">
          {placeholder =>
            <FormControl>
              <FormLabel id="sort_direction">{placeholder}</FormLabel>
              <RadioGroup
                row
                name="sort_directionp"
                {...input}
              >
                <FormControlLabel
                  value={SORT_DIRECTION.ASC} control={<Radio />}
                  label={<FormattedMessage id="filters.sort_direction_options.asc"></FormattedMessage>}
                />
                <FormControlLabel
                  value={SORT_DIRECTION.DESC} control={<Radio />}
                  label={<FormattedMessage id="filters.sort_direction_options.desc"></FormattedMessage>}
                />
              </RadioGroup>
            </FormControl>
          }
        </FormattedMessage>
      )}
    />
  )
}
