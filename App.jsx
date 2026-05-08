export default function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#f4f4f5',
      padding: '24px',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        maxWidth: '700px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '24px',
        padding: '24px'
      }}>
        <h1 style={{fontSize:'32px'}}>😎 Chappy Cut Coach</h1>

        <p>体重・体脂肪・食事を入力して管理する減量アプリ！</p>

        <div style={{marginTop:'24px'}}>
          <input placeholder="体重 kg" style={{
            width:'100%',
            padding:'14px',
            marginBottom:'12px',
            borderRadius:'12px'
          }} />

          <input placeholder="体脂肪率 %" style={{
            width:'100%',
            padding:'14px',
            marginBottom:'12px',
            borderRadius:'12px'
          }} />

          <textarea placeholder="今日の食事"
          style={{
            width:'100%',
            height:'140px',
            padding:'14px',
            borderRadius:'12px'
          }} />

          <button style={{
            width:'100%',
            marginTop:'16px',
            padding:'16px',
            borderRadius:'14px',
            background:'black',
            color:'white',
            border:'none',
            fontWeight:'bold'
          }}>
            チャッピーに解析してもらう
          </button>
        </div>
      </div>
    </div>
  )
}
