# Regiao-cpf
A simple program written in Typescript that indicates the region in which the chosen CPF was registered

It uses pure html, css as frontend. And uses tauri as backend

# How to compile
just run npm run tauri build to compile the project
or run npm run tauri dev to run the application

if you use Linux, you'll need the webkit2gtk package
if you use Nvidia along with Linux, you may end up needing to use the variable WEBKIT_DISABLE_DMABUF_RENDERER=1 before running the program
