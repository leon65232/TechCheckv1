import React, { useEffect, useRef, useState } from 'react';

const MicTest = () => {
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const mediaRecorderRef = useRef(null);
  const audioRef = useRef(null);
  const [stream, setStream] = useState(null);

  const startRecording = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setStream(mediaStream);
      const mediaRecorder = new MediaRecorder(mediaStream);
      mediaRecorderRef.current = mediaRecorder;

      const chunks = [];
      mediaRecorder.ondataavailable = e => chunks.push(e.data);
      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(chunks, { type: 'audio/wav' });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        setAudioChunks(chunks);
      };

      mediaRecorder.start();
      setRecording(true);
    } catch (err) {
      alert("Microphone access denied or not available.");
      console.error(err);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
    stream.getTracks().forEach(track => track.stop());
  };

  return (
    <div style={styles.container} className='text-white'>
      <h1 style={styles.title}>🎙️ Check Mic Online</h1>
      <p>To test your microphone, press the button below. The test is done in the browser.</p>

      {!recording && (
        <button style={styles.startButton} onClick={startRecording}>
          🚀 Start test
        </button>
      )}
      {recording && (
        <button style={styles.stopButton} onClick={stopRecording}>
          ⏹ Stop recording
        </button>
      )}

      {audioUrl && (
        <div style={styles.audioContainer}>
          <audio controls src={audioUrl} ref={audioRef} />
          <a href={audioUrl} download="mic-test.wav" style={styles.downloadLink}>⬇️ Download</a>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
    fontFamily: 'sans-serif',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
  },
  startButton: {
    padding: '1rem 2rem',
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '1rem',
  },
  stopButton: {
    padding: '1rem 2rem',
    backgroundColor: '#dc2626',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '1rem',
  },
  audioContainer: {
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  downloadLink: {
    display: 'inline-block',
    marginTop: '1rem',
    textDecoration: 'none',
    color: '#1d4ed8',
  }
};

export default MicTest;
