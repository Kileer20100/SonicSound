use tauri::Manager; 

#[tauri::command]
async fn close_splashscreen(app_handle: tauri::AppHandle) {
    if let Some(splash_window) = app_handle.get_webview_window("splashscreen") {
        let _ = splash_window.close();
    }
    if let Some(main_window) = app_handle.get_webview_window("main") {
        let _ = main_window.show();
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![close_splashscreen])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
