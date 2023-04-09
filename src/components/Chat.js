import * as React from 'react';
import Profile from '../assets/profile.jpg';
import { Close } from '../assets/close';
const Chat = ({
  width = 375,
  borderRadius = 24,
  profile = Profile,
  name = 'Emily Dougrer',
  designation = 'Developer',
  bodyText = 'Hi there.👋 We use Boards to share initial goals and ideas.',
  backgroundColor = '#4643D3',
  fontStyle = 'Montserrat',
  fontColor = '#FFFFFF',
  onClose = () => {
    console.log('Close Clicked');
  },
  onSend = () => {
    console.log('Send Clicked');
  },
}) => {
  let height = (154 / 357) * width;
  let textFieldHeight = (58 / 375) * width;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          backgroundColor: backgroundColor,
          color: fontColor,
          width: `${width}px`,
          height: `${height}px`,
          borderTopLeftRadius: `${borderRadius}px`,
          borderTopRightRadius: `${borderRadius}px`,
          padding: 0,
          borderTop:"outset",
          borderLeft:"outset",
          borderRight:"outset",
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginTop: `${0.142 * height}px`,
          }}
        >
          <img
            src={profile}
            alt="logo"
            style={{
              borderRadius: '50px',
              width: `${0.128 * width}px`,
              height: `${0.311 * height}px`,
              marginLeft: `${0.085 * width}px`,
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              marginLeft: `${0.04 * width}px`,
            }}
          >
            <div
              style={{
                fontSize: `${0.116 * height}px`,
                lineHeight: `${0.142 * height}px`,
                fontFamily: fontStyle,
                fontWeight: '600',
                letterSpacing: `0.25px`,
                textAlign: 'start',
              }}
            >
              {name}
            </div>
            <div
              style={{
                fontSize: `${0.09 * height}px`,
                lineHeight: `${0.11 * height}px`,
                fontFamily: fontStyle,
                fontWeight: '400',
                letterSpacing: `0.25px`,
                textAlign: 'start',
              }}
            >
              {designation}
            </div>
          </div>
          <div
            style={{
              transform: `translate(${0.285 * width}px, 0px)`,
              cursor: 'pointer',
            }}
            onClick={onClose}
          >
            <Close />
          </div>
        </div>
        <div
          style={{
            marginLeft: `${0.09 * width}px`,
            marginRight: `${0.13 * width}px`,
            marginTop: `${0.11 * height}px`,
            marginBottom: `${0.142 * height}px`,
            fontSize: `${0.11 * height}px`,
            lineHeight: `${0.156 * height}px`,
            fontFamily: fontStyle,
            fontWeight: '400',
            letterSpacing: `0.25px`,
            textAlign: 'start',
          }}
        >
          {bodyText}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          border: 0,
          backgroundColor: '#FFFFFF',
          borderBottomLeftRadius: `${borderRadius}px`,
          borderBottomRightRadius: `${borderRadius}px`,
          width: `${width}px`,
          height: `${textFieldHeight}px`,
          borderBottom:"outset",
          borderLeft:"outset",
          borderRight:"outset",
        }}
      >
        <input
          placeholder="Type your message..."
          style={{
            border: 0,
            marginLeft: `${0.085 * width}px`,
            fontSize: `${0.094 * height}px`,
            lineHeight: `${0.156 * height}px`,
            fontFamily: fontStyle,
            fontWeight: '400',
            letterSpacing: `0.25px`,
            textAlign: 'start',
          }}
        />
        <div
          style={{
            color: '#5856D7',
            marginRight: `${0.085 * width}px`,
            fontSize: `${0.094 * height}px`,
            lineHeight: `${0.119 * height}px`,
            fontFamily: fontStyle,
            fontWeight: '600',
            letterSpacing: `0.25px`,
            textAlign: 'end',
            cursor: 'pointer',
          }}
          onClick={onSend}
        >
          Send
        </div>
      </div>
    </div>
  );
};

Chat.defaultProps = {
  width: Number,
  borderRadius: Number,
  profile: Image,
  name: String,
  designation: String,
  bodyText: String,
  backgroundColor: String,
  fontStyle: String,
  fontColor: String,
  onClose: () => {},
  onSend: () => {},
};

export default Chat;
