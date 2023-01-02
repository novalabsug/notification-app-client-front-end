import moment from "moment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import {
  faPaperPlane,
  faMessage,
  faMicrophone,
  faAdd,
} from "@fortawesome/free-solid-svg-icons";

const Chat = ({ chat }) => {
  const recorderControls = useAudioRecorder();
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

  // handle increasing of send message box tab
  function handleIncreasingTab() {
    const messageBox = document.querySelector("#message-box");
    const messageSendWrapper = document.querySelector(".message-send-wrapper");
    const chatWrapper = document.querySelector(".chat-wrapper");
    const bodyWrapper = document.querySelector("body");

    messageBox?.addEventListener("input", () => {
      messageSendWrapper?.classList.add("tab-increase");
      chatWrapper?.classList.add("tab-increase");
      messageBox.setAttribute("rows", "5");
    });

    bodyWrapper?.addEventListener("click", (e) => {
      if (!e.target.classList.contains("message-box")) {
        messageSendWrapper?.classList.remove("tab-increase");
        chatWrapper?.classList.remove("tab-increase");
        messageBox.setAttribute("rows", "1");
      }
    });
  }

  return (
    <section className="chat flx">
      <div className="chat-wrapper">
        {chat.emptyChat ? (
          <section className="empty-chat">
            <p className="center-align">{chat.emptyChat}</p>
          </section>
        ) : (
          <section className="chat-messages"></section>
        )}
      </div>
      {/* <AudioRecorder
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
      /> */}
      <div className="message-send-wrapper flx">
        <div className="input">
          <textarea
            name="message"
            id="message-box"
            cols="30"
            className="message-box"
            rows="1"
            placeholder="Message"
            onInput={handleIncreasingTab}
          ></textarea>
        </div>
        <div className="attachment-btn btn-wrapper">
          <label for="file">
            <i className="fa-solid fa-plus"></i>
          </label>
          <input type="file" name="file" id="file" hidden />
        </div>
        <div className="audio-btn btn-wrapper">
          <i className="fa-solid fa-microphone-alt"></i>
        </div>
        <div className="send-btn btn-wrapper">
          <i className="fa-solid fa-paper-plane"></i>
        </div>
      </div>
      {/* <h5 className="date-wrapper">{moment("2022-04-05").fromNow()}</h5> */}
    </section>
  );
};

export default Chat;
