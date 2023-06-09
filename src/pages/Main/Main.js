import React from 'react';
import '../Main/Main.scss'
import '../../styles/common.scss'

const Main = () => {
  return (
    <>
        <nav>
            <div>
                <img className='instagram-navIcon' src='/images/instagram.png' alt='' />
                <span className='logo-write'>Westagram</span>
            </div>
            <div>
                <input className='search' type='text' placeholder='검색' alt='' />
                <img className='search-navIcon' src='/images/search.png' alt='' />
            </div>
            <div>
                <img className='explore-navIcon' src='/images/explore.png' alt='' />
                <img className='heart-navIcon' src='/images/heart.png' alt='' />
                <img className='profile-navIcon' src='/images/profile.png' alt='' />
            </div>
        </nav>

        <main>
            <section className='main-feed-area'>
                <div className='feed-profile-area'>
                    <div>
                        <img className='profile-img' src='/images/profilepicture.jpeg' alt='' />
                        <span className='profile-name'>seungbeom_jeon</span>
                    </div>
                    <img className='circle-feedIcon' src='/images/circlethree.png' alt='' />
                </div>
                <img className='feed-img' src='/images/feed.jpg' alt='' />
                <div className='icon-area'>
                    <span>
                        <img className='heart-red-feedIcon' src='/images/heartred.png' alt='' />
                        <img className='dm-feedIcon' src='/images/dm.png' alt='' />
                        <img className='download-feedIcon' src='/images/download.png' alt='' />
                    </span>
                    <img className='bookmark-feedIcon' src='/images/bookmark.png' alt='' />
                </div>
                <div>
                    <img className='wecode-feedIcon' src='/images/wecode.png' alt='' />
                    <span className='feed-likeNum'>wecode님 외 7명이 좋아합니다</span>
                    <div className='comment-area'>
                        <div className='comment-first'>
                            <div>seungbeom_jeon 위워크에서 1주차 시작...</div>
                            <details>
                                <summary>더 보기</summary>
                                내용추가
                            </details>
                        </div>
                        <div className='comment-next'>
                            <div className='appendChild-add'>
                                <div>
                                    <span>wecode 다 같이 화이팅~~~!</span>
                                    <span className='deleteAndLike'>
                                        <button className='delete-button'>
                                            <img className='delete-commentIcon' src='/images/deleteicon.png' alt='' />
                                        </button>
                                        <button className='like-button'>
                                            <img className='heart-commentIcon' src='/images/heart.png' alt='' />
                                        </button>
                                    </span>
                                </div>
                                <div className='comment-time'>42분 전</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='comment-create'>
                    <input className='comment-input' type='text' placeholder='댓글 달기...' />
                    <button className='comment-button'>게시</button>
                </div>
            </section>
            
            <aside className='main-right-area'>
                <section className='user-area'>
                    <img src='/images/wecode.png' alt='' />
                    <span className='userName'>
                        <div>wecode_bootcamp</div>
                        <div className='userName-sub'>WeCode | 위코드</div>
                    </span>
                </section>
                <section className='story-area'>
                    <span className='story-title'>스토리</span>
                    <a href='instead#'>모두 보기</a>
                    <div className='story-member'>
                        <img className='profile-img' src='/images/profilepicture.jpeg' alt='' />
                        <div>
                            <div>beom_jeon</div>
                            <div className='story-time'>20분 전</div>
                        </div>
                    </div>
                    <div className='story-member'>
                        <img className='profile-img' src='/images/profilepicture.jpeg' alt='' />
                        <div>
                            <div>beom_jeon</div>
                            <div className='story-time'>20분 전</div>
                        </div>
                    </div>
                    <div className='story-member'>
                        <img className='profile-img' src='/images/profilepicture.jpeg' alt='' />
                        <div>
                            <div>beom_jeon</div>
                            <div className='story-time'>20분 전</div>
                        </div>
                    </div>
                    <div className='story-member'>
                        <img className='profile-img' src='/images/profilepicture.jpeg' alt='' />
                        <div>
                            <div>beom_jeon</div>
                            <div className='story-time'>20분 전</div>
                        </div>
                    </div>
                </section>
                <section className='recommend-area'>
                    <span className='recommend-title'>회원님을 위한 추천</span>
                    <a href='instead#'>모두 보기</a>
                    <div className='recommend-member'>
                        <img className='profile-img' src='/images/profilepicture.jpeg' alt='' />
                        <div>
                            <div>seung_jeon</div>
                            <div className='recommend-relate'>beom_jeon님 외 2명이 ...</div>
                        </div>
                        <a href='instead#' className='recommend-follow'>팔로우</a>
                    </div>
                    <div className='recommend-member'>
                        <img className='profile-img' src='/images/profilepicture.jpeg' alt='' />
                        <div>
                            <div>seung_jeon</div>
                            <div className='recommend-relate'>beom_jeon님 외 2명이 ...</div>
                        </div>
                        <a href='instead#' className='recommend-follow'>팔로우</a>
                    </div>
                    <div className='recommend-member'>
                        <img className='profile-img' src='/images/profilepicture.jpeg' alt=''/>
                        <div>
                            <div>seung_jeon</div>
                            <div className='recommend-relate'>beom_jeon님 외 2명이 ...</div>
                        </div>
                        <a href='instead#' className='recommend-follow'>팔로우</a>
                    </div>
                    <div className='recommend-member'>
                        <img className='profile-img' src='/images/profilepicture.jpeg' alt='' />
                        <div>
                            <div>seung_jeon</div>
                            <div className='recommend-relate'>beom_jeon님 외 2명이 ...</div>
                        </div>
                        <a href='instead#' className='recommend-follow'>팔로우</a>
                    </div>
                </section>
                <footer>
                    <div>Westagram 정보·지원·홍보 센터·API·</div>
                    <div>채용정보·개인정보처리방침·약관·</div>
                    <div>디렉터리·프로필·해시태그·언어</div>
                    <br></br>
                    <div>Ⓒ 2019 WESTAGRAM</div>
                </footer>
            </aside>

            <div className="test"></div>
        </main>
    </>
  )
}

export default Main