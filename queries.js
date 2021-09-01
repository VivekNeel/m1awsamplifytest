const studySetQuery = `
  query StudySetDetailsQuery($id: Int!, $publishMode: PublishMode!) {
    studySetDetails(numericId: $id, publishMode : $publishMode) {
      id
      studySet {
        id
        created
        updated
        contentType
        numericId
        name
        accessType
        description
        isFlashCardsOnly
        bundleId
         icon{
              url
            }
        owner{
          name
          iconUrl
        }
        itemsCount{
          numTerms
          numFacts
        }
        terms(first : 10){
          edges{
            node{
              id
              term{
                id
                name
                facts{
                  fact{
                    id
                    name
                    prompt
                    image{
                      id
                      url
                    }
                  }
                }
                images{
                  id
                  url
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  }`;

export {studySetQuery};
