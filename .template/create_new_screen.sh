#!/bin/bash

REDUX_PATH="redux"
COMPONENT="components"
PARENT_DIR=".template/template_new_screen"
REPLACE_SNAKE="_replace_snake_came"
REPLACE_PASCAL="ReplacePascalCame"
AUTHO="{autho}"
CREATED_AT="{DateNow}"
EX="ts"

parse_git_user() {
   git config --get user.name
}

convert_pascal_to_snack_case() {
    nameSnake=$(echo $1 | sed -r 's/([A-Z])/_\L\1/g' | sed 's/^_//')
    namePascal=$1
}

convert_pascal_to_camel_case() {
    nameCamel=$(echo $1 | sed -r 's/^[A-Z]/\L&/')
}

convert_snake_to_pascal_case() {
    nameSnake=$1
    namePascal=$(echo $1 | sed -r 's/(^|_)([a-z])/\U\2/g')
}

respace_content_file() {
    if [ -f $3 ]; then
        sed -i "s/$1/$2/" $3
    fi
}

rename_file() {
    if [ -f $1 ]; then
        mv $1 $2
    fi
}

create_new_screen() {
    {

        screenNameOld="${newDir}/${REPLACE_PASCAL}Screen.tsx"
        screenNameNew="${newDir}/${namePascal}Screen.tsx"

        screenReducerOld="${newDir}/${REDUX_PATH}/${REPLACE_PASCAL}Reducer.${EX}"
        screenReducerNew="${newDir}/${REDUX_PATH}/${namePascal}Reducer.$EX"

        screenViewModelOld="${newDir}/${REDUX_PATH}/${REPLACE_PASCAL}ViewModel.${EX}"
        screenViewModelNew="${newDir}/${REDUX_PATH}/${namePascal}ViewModel.$EX"

        screenStateOld="${newDir}/${REDUX_PATH}/${REPLACE_PASCAL}State.${EX}"
        screenStateNew="${newDir}/${REDUX_PATH}/${namePascal}State.$EX"

        screenIndex="${newDir}/${REDUX_PATH}/index.$EX"

        loadingComponentPath="${newDir}/${COMPONENT}/LoadingScreen.tsx"
        textComponentPath="${newDir}/${COMPONENT}/TextComponent.tsx"

        cp -r $PARENT_DIR $newDir

        # main screen
        rename_file $screenNameOld $screenNameNew
        respace_content_file $REPLACE_PASCAL $namePascal $screenNameNew
        respace_content_file $REPLACE_SNAKE $nameCamel $screenNameNew
        respace_content_file $AUTHO $userName $screenNameNew
        respace_content_file $CREATED_AT $dateNow $screenNameNew

        # reducer
        rename_file $screenReducerOld $screenReducerNew
        respace_content_file $REPLACE_PASCAL $namePascal $screenReducerNew
        respace_content_file $REPLACE_SNAKE $nameCamel $screenReducerNew

        # viewmodel
        rename_file $screenViewModelOld $screenViewModelNew
        respace_content_file $REPLACE_PASCAL $namePascal $screenViewModelNew
        respace_content_file $REPLACE_SNAKE $nameCamel $screenViewModelNew

        # state
        rename_file $screenStateOld $screenStateNew
        respace_content_file $REPLACE_PASCAL $namePascal $screenStateNew
        respace_content_file $REPLACE_SNAKE $nameCamel $screenStateNew

        # index
        respace_content_file $REPLACE_PASCAL $namePascal $screenIndex
        respace_content_file $REPLACE_PASCAL $namePascal $screenIndex

        # loading
        respace_content_file $REPLACE_PASCAL $namePascal $loadingComponentPath
        respace_content_file $REPLACE_SNAKE $nameCamel $loadingComponentPath

        # text component
        respace_content_file $REPLACE_PASCAL $namePascal $textComponentPath
        respace_content_file $REPLACE_SNAKE $nameCamel $textComponentPath

    } || {
        rm -rf $newDir
        echo "An error appeared. $nameSnake screen creation failed."
    }
}

dir=$1
nameSnake=""
namePascal=""
export userName="$(parse_git_user)"
dateNow=$(date '+%Y-%m-%d')
echo $dateNow


convert_pascal_to_snack_case $2
convert_pascal_to_camel_case $2
newDir="${dir}/${namePascal}"

if [ ! -d "$newDir" ]; then
    echo "$namePascal generating."
    create_new_screen
else
    echo "$newDir is exist. $namePascal screen creation failed."
fi

