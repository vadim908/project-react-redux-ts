import * as UserActionCreator from "./user";
import * as PhotoActionCreator from "./photo"
import * as PostActionCreator from "./posts"

const ActionAllCreators = {
    ...UserActionCreator,
    ...PhotoActionCreator,
    ...PostActionCreator,
}



export async function http<T>(
    request: RequestInfo
  ): Promise<T> {
    const response = await fetch(request);
    const body = await response.json();
    return body;
  }

  export default ActionAllCreators;