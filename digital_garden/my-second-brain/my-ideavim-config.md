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

```shell
" =================== KNOWLEDGE =======================

" Difference between all the different maps:
"   https://stackoverflow.com/questions/3776117/what-is-the-difference-between-the-remap-noremap-nnoremap-and-vnoremap-mapping
" Ideavim actionlist:
"   https://gist.github.com/zchee/9c78f91cc5ad771c1f5d
" List of supported plugins:
"   https://github.com/JetBrains/ideavim/wiki/Emulated-plugins
"   https://betterprogramming.pub/the-essential-ideavim-plugins-f939b4325180
"

" Map leader key is set to ';'
let leader = ";"

" =================== PLUGINS =========================

" Surround words very easily with characters
"   https://github.com/tpope/vim-surround
Plug 'tpope/vim-surround'

" Emulate NERDTree
"   https://github.com/preservim/nerdtree
Plug 'preservim/nerdtree'

" Allows for easy commenting with 'gcc'
"   https://github.com/tpope/vim-commentary
Plug 'tpope/vim-commentary'

" Swap two words easily
"   https://github.com/tommcdo/vim-exchange
Plug 'tommcdo/vim-exchange'

" =================== GENERAL CONFIG ==================

"Enable relative line numbering
set number relativenumber

" Shows what mode Vim is in at the bottom of intellij
set showmode

" Uses the joining functionality from Intellij
set ideajoin

" Stay in the mode in which the editing started
set idearefactormode=keep

" See how many lines of history VIM has to remember
set history=500

" ================== VIM USER INTERFACE =================

" Set 7 lines to the cursor - when moving vertically using j/k
set so=7

" Always show current position
set ruler

" Configure backspace so it acts as it should act
set backspace=eol,start,indent
set whichwrap+=<,>,h,l

" Ignore case when searching
set ignorecase

" When searching try to be smart about cases
set smartcase

" Makes search act like search in modern browsers
set incsearch

" Don't redraw while executing macros (good performance config)
set lazyredraw

" For regular expressions turn magic on
set magic

" Show matching brackets when text indicator is over them
set showmatch

" How many tenths of a second to blink when matching brackets
set mat=2

" Speed up scrolling in Vim 
set ttyfast 

" No annoying sound on errors
set visualbell
set t_vb=
set tm=500

" ==================== TEXT, TAB AND INDENT RELATED ====================

" Use spaces instead of tabs
set expandtab

" Be smart when using tabs ;)
set smarttab

" 1 tab == 4 spaces
set shiftwidth=4
set tabstop=4

" Linebreak on 500 characters
set lbr
set tw=500

set ai "Auto indent
set si "Smart indent
set wrap "Wrap lines

" =============== MOVING AROUND, TABS, WINDOWS AND BUFFERS ========

" Exit in and out of insert mode easily
imap jj <Esc>
imap jk <Esc>
imap JJ <Esc>
imap JK <Esc>

" Shortcutting split navigation
map <c-h> <C-w>h
map <c-j> <C-w>j
map <c-k> <C-w>k
map <c-l> <C-w>l

" Move a line of text using ALT+[nm]
map <a-n> :m +1<CR>
map <a-m> :m -2<CR>

" Tab navigation
nnoremap <a-l> :action NextTab<CR>
nnoremap <a-h> :action PreviousTab<CR>
nnoremap <c-\> :action SplitVertically<CR>
nnoremap <c--> :action SplitHorizontally<CR>
nnoremap <c-=> :action Unsplit<CR>
nnoremap <c-m> :action MoveEditorToOppositeTabGroup<CR>

" Focus project window
nnoremap <c-n> :NERDTreeFocus<CR>

" Keep visual selection
vnoremap < <gv
vnoremap > >gv

" Navigate through method signatures
map [[ <Action>(MethodUp)
map ]] <Action>(MethodDown)

" ================= EDITING MAPPINGS ===================

" Remap VIM 0 to first non-blank character
map 0 ^

" Code refactoring
nnoremap gs :action GotoSuperMethod<CR>
nnoremap gd :action GotoDeclaration<CR>
nnoremap gi :action GotoImplementation<CR>
nnoremap gt :action GotoTest<CR>
nnoremap ge :action GotoNextError<CR>
nnoremap gE :action GotoPreviousError<CR>
nnoremap ff :action SearchEverywhere<CR>
nnoremap fc :action ReformatCode<CR>
nnoremap ;r :action RenameElement<CR>
nnoremap ;t :action ActivateTerminalToolWindow<CR>
nnoremap ;b :action Vcs.RollbackChangedLines<CR>
nnoremap ;f :action RenameFile<CR>
nnoremap ;h :action HideAllWindows<CR>
nnoremap ;o :action OptimizeImports<CR>
nnoremap ;c :action CloseAllEditorsButActive<CR>
nnoremap ;e :action CloseEditor<CR>
nnoremap <space><space> :action ShowErrorDescription<CR>

nnoremap ,u :action Rerun<CR>
nnoremap ,r :action RunClass<CR>
nnoremap ,R :action Run<CR>
nnoremap ,d :action DebugClass<CR>
nnoremap ,D :action Debug<CR>
```

{{#template ../templates/footer.md path=../images}}