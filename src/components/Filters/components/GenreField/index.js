import {Field} from 'react-final-form'
import {Select, InputLabel, MenuItem, FormControl} from '@mui/material';
import {FormattedMessage} from "react-intl";

export const GenreField = ({data}) => {
  return (
    <Field
      name="genre"
      render={({input}) => (
        <FormattedMessage id="filters.genre">
          {placeholder =>
            <FormControl sx={{m: 1, minWidth: 120}}>
              <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                autoWidth
                label={placeholder}
                {...input}
              >
                {data.genres.map(({name, id}) => (
                  <MenuItem key={id} value={id}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          }
        </FormattedMessage>
      )}
    />
  )
}
