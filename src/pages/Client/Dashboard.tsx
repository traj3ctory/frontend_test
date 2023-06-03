import { FC, useState, useCallback, useEffect } from "react";

import DashboardLayout from "@/shared/DashboardLayout";
import Request from "@/helpers/Request";
import asset from "@/assets/asset1.jpg";
import asset1 from "@/assets/assets2.webp";

interface IProps {}

/**
 * @author traj3ctory
 * @function @Dashboard
 **/

const Dashboard: FC<IProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [postData, setPostData] = useState<any>([]);

  // use the useCallback hook to make a fetch request
  const fetchData = useCallback(async () => {
    setIsLoading(true);

    try {
      const resp = await Request("posts/feed?page=1");
      setPostData(resp.data.posts);
    } catch (error: any) {
      const message =
        error.response?.data.message || error.message || "Something Went Wrong";
      alert(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <DashboardLayout>
      <div className="dashboard_content">
        {isLoading && <h5>Fetching Post ...</h5>}
        {!isLoading &&
          postData?.map((el: any, i: number) => {
            return (
              <div
                key={el.uid + i}
                className="card card-body border-0 shadow post mb-3 pb-4 rounded-4 px-md-3 px-2"
              >
                <div className="mx-md-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={el.image || asset}
                        alt="user_profile_img"
                        className="img_fluid rounded-circle"
                        width={50}
                      />
                      <div>
                        <h5 className="mb-0">
                          {el?.user?.name || ""}&ensp;&ensp;
                          <small className="text_gray">6m</small>
                        </h5>
                        <small className="text_gray">
                          {el?.user?.course_of_study ||
                            "Lorem ipsum dolor sit amet."}
                        </small>
                      </div>
                    </div>
                    <i className="bi bi-three-dots" />
                  </div>

                  <div className="body mx-lg-5 mx-3 mt-3 pb-2 border-bottom">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <img
                        src={asset}
                        alt="user_profile_img"
                        className="img_fluid rounded-circle"
                        width={50}
                      />
                      <div>
                        <h5 className="mb-0">
                          {el?.user?.name || ""}&ensp;&ensp;
                          <small className="text_gray">6m</small>
                        </h5>
                        <small className="text_gray">
                          {el?.user?.course_of_study ||
                            "Lorem ipsum dolor sit amet."}
                        </small>
                      </div>
                    </div>
                    {/* ==== */}
                    <div className="mb-3">
                      <img
                        src={asset1}
                        alt="hello"
                        className="img-fluid w-100 mb-3"
                      />
                      <small className="text_gray">
                       {el.body}
                      </small>
                    </div>
                    {/* ==== */}
                    <div className="d-flex justify-content-between">
                      <div className="img_group">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                          <img
                            key={i}
                            src={asset}
                            alt="people"
                            className="img-fluid rounded-circle"
                            width={30}
                          />
                        ))}
                        <div className="img_look_alike">+8</div>
                      </div>
                      <div className="d-flex flex-lg-row flex-column gap-lg-3">
                        <span className="text_gray">{el.likes}&nbsp;Likes</span>
                        <span className="text_gray">
                          {el.comments}&nbsp;Comments
                        </span>
                        <span className="text_gray">
                          {el.shares}&nbsp;Request
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* ===== */}
                  <div className="footer mx-lg-5">
                    <div className="d-flex gap-2 border-bottom py-2">
                      <i className="bi bi-heart" />
                      <i className="bi bi-chat" />
                      <i className="bi bi-share" />
                    </div>
                    <div className="d-flex align-items-center gap-3 mt-3">
                      <img
                        src={asset}
                        alt="user_profile_img"
                        className="img_fluid rounded-circle d-md-block d-none"
                        width={40}
                      />

                      <div className="comment_section w-100">
                        <textarea
                          placeholder="Write a comment ..."
                          name="comment"
                          id="comment"
                          cols={30}
                          rows={1}
                          className="form-control w-100"
                        />
                        <div className="icon">
                          <i className="bi bi-images" />
                          <i className="bi bi-emoji-laughing" />
                        </div>
                      </div>

                      <button type="button" className="btn">
                        <i className="bi bi-send text-primary" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
