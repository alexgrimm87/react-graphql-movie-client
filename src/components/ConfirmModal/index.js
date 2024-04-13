import {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Box, Typography, Modal, Paper, Divider, IconButton, InputBase, Alert} from '@mui/material';
import {ContentCopy, Visibility, Close} from '@mui/icons-material';
import {CONFIRM_TIMEOUT} from "../../const";
import SocialShare from "../SocialShare";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

const ConfirmModal = ({open, url, title, onClose}) => {
  const [openAlert, setOpenAlert] = useState(false);

  useEffect(() => {
    let timer;

    if (openAlert) {
      timer = setTimeout(() => {setOpenAlert(false)}, CONFIRM_TIMEOUT);
    }

    return () => clearTimeout(timer);
  }, [openAlert]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            marginTop: '24px',
            display: 'flex',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <InputBase
            sx={{ml: 1, flex: 1}}
            placeholder="List URL"
            inputProps={{'aria-label': 'list URL'}}
            value={url}
          />
          <IconButton href={url} target="_blank" sx={{p: '10px'}} aria-label="preivew">
            <Visibility />
          </IconButton>
          <Divider sx={{height: 28, m: 0.5}} orientation="vertical" />
          <CopyToClipboard
            text={url}
            onCopy={() => setOpenAlert(true)}
          >
            <IconButton
              color="primary"
              sx={{p: '10px'}}
              aria-label="copy to clipboard"
            >
              <ContentCopy />
            </IconButton>
          </CopyToClipboard>
        </Paper>

        <Typography id="modal-modal-title" variant="h6" component="h3">
          Share with friends
        </Typography>

        <SocialShare url={url} title="title" />

        {openAlert ? (
          <Alert
            sx={{mb: 2}}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpenAlert(false);
                }}
              >
                <Close fontSize="inherit" />
              </IconButton>
            }
          >
            Copied!
          </Alert>
        ) : null}
      </Box>
    </Modal>
  );
}

ConfirmModal.propTypes = {
  open: PropTypes.bool,
  url: PropTypes.string,
  title: PropTypes.string,
  onClose: PropTypes.func
}

export default ConfirmModal;
