library(hunspell)
library(tidyverse)
library(magrittr)

collapse_list = function(list.item) {
  return(
    lapply(list.item,function (x) {paste0(x,collapse = "")}) %>% 
      unlist() %>% paste0(collapse = " ") %>% trimws()
  )
}

cleantext = function(x){
  
  sapply(1:length(x),function(y){
    bad = hunspell(x[y])[[1]]
    good = tryCatch(
      unlist(lapply(hunspell_suggest(bad),`[[`,1)),
      error=function(e) NULL
    )
    if (length(bad) & !is.null(good)){
      for (i in 1:length(bad)){
        x[y] <<- gsub(bad[i],good[i],x[y])
      }}
  }
  )
  return(x)
}

#train
#####
train <- read.csv('C:\\Data\\haitaketeno.github.io\\DisasterTweets\\nlp-getting-started\\train_clean.csv',
                  stringsAsFactors = F)

text.as.words <- strsplit(train$text," ")
taw.clean <- lapply(text.as.words, str_extract_all, "[a-z]|[0-9]")

taw.clean.collapse <- sapply(taw.clean, collapse_list)

train$cleantext <- cleantext(taw.clean.collapse)

train <- train %>% select(X,id,keyword,location,text=cleantext,target)

write.csv(train,
          'C:\\Data\\haitaketeno.github.io\\DisasterTweets\\nlp-getting-started\\train_clean_spellcheck.csv',
          row.names = F)

#test
#####
test <- read.csv('C:\\Data\\haitaketeno.github.io\\DisasterTweets\\nlp-getting-started\\test_clean.csv',
                  stringsAsFactors = F)

text.as.words <- strsplit(test$text," ")
taw.clean <- lapply(text.as.words, str_extract_all, "[a-z]|[0-9]")

taw.clean.collapse <- sapply(taw.clean, collapse_list)

test$cleantext <- cleantext(taw.clean.collapse)

test <- test %>% select(X,id,keyword,location,text=cleantext)

write.csv(test,
          'C:\\Data\\haitaketeno.github.io\\DisasterTweets\\nlp-getting-started\\test_clean_spellcheck.csv',
          row.names = F)