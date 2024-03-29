<h1 align="center">My IdeaVim Config</h1>

<div align="center">
    <img src="../images/my-second-brain/ideavim.png">
</div>

> Modal **Based** Editing.

What. An. Invention.

Pretty much everything I develop is carried out on the [JetBrains](https://www.jetbrains.com/) offerings, and _I'm in
love with them._ **Especially** since the [GitHub Student Developer Pack](https://education.github.com/pack) gives you
free licences to all their IDEs while you're a student at an academic institution!

[IdeaVim](https://github.com/JetBrains/ideavim) is an extension that emulates Vim across all the aforementioned IDEs!
It's pretty amazing, and I've been using it for the past 2 years. I'd heavily encourage you to learn Vim/IdeaVim! - If
you haven't already :D - The power and flexibility is just unmatched.

Anyway, as the title promises, here's my custom config!

## Custom Config

```vim
"" Difference between all the different maps:
""   https://stackoverflow.com/questions/3776117/what-is-the-difference-between-the-remap-noremap-nnoremap-and-vnoremap-mapping
"" Ideavim actionlist:
""   https://gist.github.com/zchee/9c78f91cc5ad771c1f5d
"" List of supported plugins:
""   https://github.com/JetBrains/ideavim/wiki/Emulated-plugins
""   https://betterprogramming.pub/the-essential-ideavim-plugins-f939b4325180

"" Good Keyboard Shortcut Rebinds:
""  <Up> -> <A-k>
""  <Down> -> <A-j>
""  <Alt+Insert> -> <A+n>
""  ---
""  Manage Projects -> <A-p>
""  ActivateTerminalToolWindow -> <A-t>
""  Hide Active Window -> Alt + Shift + h
""  ---
""  UNBIND default <C-n>

"" Set Handlers
sethandler <S-Tab> a:vim
sethandler <C-A> a:ide
sethandler <C-C> a:ide
sethandler <C-D> a:vim
sethandler <C-H> a:vim
sethandler <C-I> a:vim
sethandler <C-J> a:vim
sethandler <A-J> a:vim
sethandler <C-N> a:vim
sethandler <C-O> a:vim
sethandler <C-P> a:vim
sethandler <C-Q> a:vim
sethandler <C-T> a:vim
sethandler <C-U> a:vim
sethandler <C-V> a:ide

let mapleader = " "

"" Emulated plugins

" use 'c|d|yia' to c|d|y inner arguments
set argtextobj
let g:argtextobj_pairs="(:),{:},<:>,[:]"
set commentary
set highlightedyank
set NERDTree
set surround
set textobj-entire
set which-key
set quickscope
let g:qs_highlight_on_keys = ['f', 'F', 't', 'T']
let g:qs_primary_color = '#e64553'
let g:qs_secondary_color = '#fe640b'
let g:qs_accepted_chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '{', '}', '[', ']', '<', '>']

"" Options
set notimeout
set smartcase
set incsearch
set relativenumber
set number
set ideajoin
set showcmd
set showmode
" Stay in the mode in which the editing started
set idearefactormode=keep

" No annoying sound on errors
set visualbell
set tm=500

" Set scrolloff
set scrolloff=8

"" Mappings
" 0 -> first non-blank character
map 0 ^

" Center buffer when navigating
nmap <C-u> <C-u>zz
nmap <C-d> <C-d>zz
nmap n nzzzv
nmap N Nzzzv

" Workaround for unifying navigation history:
" https://youtrack.jetbrains.com/issue/VIM-44/Unify-navigation-history-between-ideavim-and-idea"
nmap <C-o> <Action>(Back)
nmap <C-i> <Action>(Forward)

" Navigate project errors
map [d <Action>(GotoPreviousError)
map ]d <Action>(GotoNextError)

" Navigate git changes
map [c <Action>(VcsShowPrevChangeMarker)
map ]c <Action>(VcsShowNextChangeMarker)

" Navigate methods
map [m <Action>(MethodUp)
map ]m <Action>(MethodDown)

" Show hoverdoc
map H <Action>(ShowErrorDescription)

" Shortcutting split navigation
map <a-h> <C-w>h
map <a-j> <C-w>j
map <a-k> <C-w>k
map <a-l> <C-w>l

" Bye bye
map <leader>q <Action>(CloseContent)
map <leader>Q <Action>(CloseAllEditors)
map <leader>h <Action>(HideAllWindows)

" Focus project window
map <leader>e :NERDTreeFocus<CR>

" File navigation
map <leader>ff <Action>(GotoFile)
map <leader>fg <Action>(FindInPath)
map <leader>fm <Action>(MainMenu)
map <leader>fr <Action>(RecentFiles)
map <leader>fp <Action>(ManageRecentProjects)
map <leader><leader> <Action>(SearchEverywhere)

" Experiment
map <leader> <Action>(MainMenu)

" Tab navigation
map <Tab> <Action>(NextTab)
map <S-Tab> <Action>(PreviousTab)

" Keep visual selection
vnoremap < <gv
vnoremap > >gv

" LSP stuffs
map <leader>lo <Action>(OptimizeImports)
map <leader>lf <Action>(ReformatCode)
map <leader>lr <Action>(RenameElement)
map <leader>la <Action>(ShowIntentionActions)
map gt <Action>(GotoTest)
map gs <Action>(GotoSuperMethod)
map gI <Action>(GotoImplementation)

" Debugging stuffs
map <leader>dt <Action>(ToggleLineBreakpoint)
map <leader>db <Action>(ViewBreakpoints)
map <leader>ds <Action>(ContextDebug)
map <leader>df <Action>(ChooseDebugConfiguration)
map <leader>rs <Action>(ContextRun)
map <leader>rc <Action>(RunClass)
map <leader>rf <Action>(ChooseRunConfiguration)

" Git stuffs
map <leader>g <Action>(ActivateCommitToolWindow)

" Hello terminal :D
map <leader>t <Action>(ActivateTerminalToolWindow)

" Open ideavimrc
map <leader>; :e ~/.config/ideavim/ideavimrc<CR>

" Alt+j/k for autocompletion popup
inoremap <A-j> <C-n>
inoremap <A-k> <C-p>

" Shhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
" https://youtrack.jetbrains.com/issue/VIM-1341/gx-should-open-selection-in-browser
nnoremap gx gd

" Zen mode
map <leader>zz <Action>(TogglePresentationMode)

" Vim search is simply outclassed here
map / <Action>(Find)
```

{{#template ../templates/footer.md path=../images}}
